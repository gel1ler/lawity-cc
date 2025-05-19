import { ReactNode } from "react";

export const Button = ({ children, mt }: { children?: ReactNode, mt: number }) =>
    <button className='px-4 py-2 purp-main text-white w-fit rounded-xl' style={{ marginTop: mt + 'rem' }}>
        {children || "Оставить заявку"}
    </button>