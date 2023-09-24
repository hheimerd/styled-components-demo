import {HTMLProps, useEffect} from 'react';

// Tagged templates https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates
console.log`
  text-decoration: inherit;
  example1: ${'text'}
  example2: ${() => 'function'}
`

// ref пропустим, он не важен
type DivProps = Omit<HTMLProps<HTMLDivElement>, 'ref'>

// Тип доступных объектов для передачи в template
type Expressions<TProps> = Array<((props: TProps) => string) | string>

// Та самая tagged функция как styled.div
function div<TProps>(
    strings: TemplateStringsArray,
    ...args: Expressions<TProps & DivProps>
) {
    const useOnse = createUseOnce();

    return (props: TProps & DivProps) => {
        const evaluatedArgs = evaluateArgs(args, props)
        const css = interpolateString(strings, ...evaluatedArgs);

        // Обязательно извлекаем className
        const {className: cn, ...restProps} = props;

        const className = generateClassName(props)

        useOnse(className, () => {
            const style = document.createElement('style');
            style.type = 'text/css'
            style.textContent = `.${className} {${css}}`;
            document.head.appendChild(style);


            return () => {
                style.remove()
            };
        }, [css]);

        // Переданный classname более приоритетный
        return <div className={`${className} ${cn ?? ''}`} {...restProps}></div>
    }
}

// Экспортируем кастомный styled объект
export const styled = {
    div
}

// Функция, которая передает пропсы в функции, которые передали в template
function evaluateArgs<TProps>(args: Expressions<TProps>, props: TProps) {
    return args.map(argument => {
        switch (typeof argument) {
        case 'function':
            // Вызываем функцию, переданную в темплейт
            // ${(props) => 'string'}
            return argument(props);
        default:
            // Сделаем общий случай для любых обхектов
            return String(props)
        }
    })
}


// Стандартная функция, которая выполняется при использовании шаблонных строк без указания функции
function interpolateString(strings: TemplateStringsArray, ...values: string[]) {
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
            result += values[i];
        }
    }
    return result;
}

const classesMap = new Map<string, string>;

function generateClassName(props: Record<string, unknown>) {
    const key = JSON.stringify(props);
    if (classesMap.has(key) === false)
        classesMap.set(key, generateRandomString(10));

    return classesMap.get(key)!;
}


function generateRandomString(length: number) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

function createUseOnce() {
    const counter: Record<string, number> = {};
    const callbacks: Record<string, () => void> = {};

    return (key: string, ...useEffectParams: Parameters<typeof useEffect>) => {
        const [fn, deps] = useEffectParams;
        useEffect(() => {
            counter[key] ??= 0;
            if (counter[key]++ == 0) {
                const desctructor = fn();
                if (desctructor)
                    callbacks[key] = desctructor;
            }

            return () => {
                if (--counter[key] == 0) {
                    callbacks[key]?.();
                }
            };
        }, deps);
    }
}
