export const Input = ({ 
    placeholder, value, setValue
 }: { 
    placeholder: string, value: string, setValue: (val: string) => void
 }) => (
    <input
        data-aos='fade-up'
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        className="w-full px-4 py-3 text-black-main bg-white border-gray-line border-2 rounded-lg focus:border-purp-main outline-none transition-colors duration-300"
        placeholder={placeholder}
    />
);

export const Checkbox = ({
    label, checked, onChange, white, center
}: {
    label: string, checked: boolean, onChange: () => void, white?: boolean, center?: boolean
}) => (
    <label data-aos='fade-up' className={`inline-flex items-center cursor-pointer ${center ? 'w-fit' : 'w-full'} overflow-hidden`}>
        <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="hidden"
        />
        <span className={`flex-shrink-0 w-5 h-5 border-2 rounded-sm mr-2 flex items-center justify-center transition-colors aspect-square
      ${checked ? 'bg-purp-main border-purp-main' : 'border-gray-400'}`}
        >
            {checked && (
                <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
            )}
        </span>
        <p className={`${white ? 'white' : 'text-gray-700'} text-sm whitespace-nowrap overflow-hidden text-ellipsis flex-grow min-w-0`}>
            {label}
        </p>
    </label>
);

export const PhoneInput = ({ placeholder, value, setValue }: { placeholder: string, value: string, setValue: (val: string) => void }) => {
    const formatPhoneNumber = (input: string) => {
        // Удаляем все нецифровые символы
        const cleaned = input.replace(/\D/g, '');

        // Ограничиваем длину (1 - код страны, 10 - остальные цифры)
        const limited = cleaned.slice(0, 11);

        let formattedValue = '';

        if (limited.length > 0) {
            formattedValue = `+7 (${limited.slice(1, 4)}`;

            if (limited.length > 4) {
                formattedValue += `) ${limited.slice(4, 7)}`;
            }

            if (limited.length > 7) {
                formattedValue += `-${limited.slice(7, 9)}`;
            }

            if (limited.length > 9) {
                formattedValue += `-${limited.slice(9, 11)}`;
            }
        }

        return formattedValue;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhoneNumber(e.target.value);
        setValue(formatted);
    };

    return (
        <input
            data-aos='fade-up'
            type="tel"
            value={value}
            onChange={handleChange}
            className="text-black-main w-full px-4 py-3 bg-white border-gray-line border-2 rounded-lg focus:border-purp-main outline-none transition-colors duration-300"
            placeholder={placeholder}
            maxLength={18} // Максимальная длина форматированного номера
        />
    );
};