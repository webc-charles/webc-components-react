import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode, HTMLAttributes } from 'react';

type AlertVariantTypes = 'accent' | 'success' | 'danger' | 'warning' | 'info' | 'default';
type AlertTypes = {
    title?: ReactNode;
    children?: ReactNode;
    variant?: AlertVariantTypes;
};

declare function Alert({ title, variant, children }: AlertTypes): react_jsx_runtime.JSX.Element;

type BadgeVariantTypes = 'default' | 'accent' | 'warning' | 'info' | 'success';
type BadgeTypes = {
    className?: string;
    children: ReactNode;
    variant?: BadgeVariantTypes;
};

declare function Badge({ variant, className, children, }: BadgeTypes): react_jsx_runtime.JSX.Element;

type ButtonVariantTypes = 'basic' | 'accent' | 'danger';
type ButtonTypes = {
    id?: string;
    title?: string;
    link?: string;
    className?: string;
    action?: () => void;
    children?: ReactNode;
    variant?: ButtonVariantTypes;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset';
};
type ButtonRef = HTMLButtonElement | HTMLAnchorElement | HTMLDivElement;

declare const Button: react.ForwardRefExoticComponent<ButtonTypes & react.RefAttributes<ButtonRef>>;

type CardTypes = {
    className?: string;
    children: ReactNode;
};
type CardHeaderTypes = {
    className?: string;
    children: ReactNode;
};
type CardBodyTypes = {
    className?: string;
    children: ReactNode;
};
type CardFooterTypes = {
    className?: string;
    children: ReactNode;
};

declare function Card({ className, children }: CardTypes): react_jsx_runtime.JSX.Element;
declare function CardHeader({ className, children }: CardHeaderTypes): react_jsx_runtime.JSX.Element;
declare function CardBody({ className, children }: CardBodyTypes): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, children }: CardFooterTypes): react_jsx_runtime.JSX.Element;

type InputNumberTypes = {
    value?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    label?: string;
    className?: string;
    inputClassName?: string;
    labelClassName?: string;
    placeholder?: string;
    incrementLabel?: string;
    decrementLabel?: string;
};
type InputDateTypes = {
    selected: Date | null;
    onChange: (date: Date | null) => void;
    onBlur?: () => void;
    placeholder?: string;
    dateFormat?: string;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    className?: string;
    title?: string;
};
type CheckboxTypes = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    className?: string;
    labelClassName?: string;
};

declare function InputDate({ selected, onChange, onBlur, placeholder, dateFormat, minDate, maxDate, disabled, className, title, }: InputDateTypes): react_jsx_runtime.JSX.Element;

declare function InputNumber({ value, onChange, min, max, step, disabled, label, className, inputClassName, labelClassName, placeholder, incrementLabel, decrementLabel, }: InputNumberTypes): react_jsx_runtime.JSX.Element;

declare function Checkbox({ checked, onChange, label, disabled, className, labelClassName, }: CheckboxTypes): react_jsx_runtime.JSX.Element;

type GapSize = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type GridTypes = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    col?: number;
    colXS?: number;
    colSM?: number;
    colMD?: number;
    colLG?: number;
    colXL?: number;
    gap?: GapSize;
    gapXS?: GapSize;
    gapSM?: GapSize;
    gapMD?: GapSize;
    gapLG?: GapSize;
    gapXL?: GapSize;
};
type GridItemTypes = HTMLAttributes<HTMLDivElement> & {
    children: ReactNode;
    col?: number;
    colXS?: number;
    colSM?: number;
    colMD?: number;
    colLG?: number;
    colXL?: number;
    row?: number;
    rowXS?: number;
    rowSM?: number;
    rowMD?: number;
    rowLG?: number;
    rowXL?: number;
};

declare function Grid({ children, gap, gapXS, gapSM, gapMD, gapLG, gapXL, col, colXS, colSM, colMD, colLG, colXL, className, ...rest }: GridTypes): react_jsx_runtime.JSX.Element;

declare function GridItem({ children, col, colXS, colSM, colMD, colLG, colXL, row, rowXS, rowSM, rowMD, rowLG, rowXL, className, ...rest }: GridItemTypes): react_jsx_runtime.JSX.Element;

type ModalSizeTypes = 'sm' | 'md' | 'lg' | 'xl' | 'full';
type ModalConfigTypes = {
    id?: number;
    title?: ReactNode;
    children: ReactNode;
    size?: ModalSizeTypes;
    closeOnBackdrop?: boolean;
    duration?: number;
    closeLabel?: string;
};
type ModalTypes = ModalConfigTypes & {
    onRemove: (id: number) => void;
};

declare function Modal({ id, title, size, children, onRemove, duration, closeOnBackdrop, closeLabel, }: ModalTypes): react_jsx_runtime.JSX.Element;

declare function Modals({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;

type ModalsContextTypes = {
    modals: ModalConfigTypes[];
    addModal: (options: ModalConfigTypes) => void;
    removeModal: (id: number) => void;
};
declare const useModals: () => ModalsContextTypes;

type NoteTypes = {
    title?: ReactNode;
    children?: ReactNode;
    variant?: 'default' | 'danger' | 'success' | 'warning';
};

declare function Note({ title, variant, children }: NoteTypes): react_jsx_runtime.JSX.Element | null;

type TitleTypes = {
    level?: '1' | '2' | '3' | '4' | '5' | '6';
    children: ReactNode;
    className?: string;
};

declare function Title({ level, children, className }: TitleTypes): react_jsx_runtime.JSX.Element;

type ToastVariantTypes = 'accent' | 'success' | 'danger' | 'warning' | 'info';
type ToastConfigTypes = {
    id?: number;
    title?: ReactNode;
    variant?: ToastVariantTypes;
    duration?: number;
    children: ReactNode;
    closeLabel?: string;
};
type ToastTypes = ToastConfigTypes & {
    onRemove: (id: number) => void;
};

declare function Toast({ id, title, children, variant, duration, onRemove, closeLabel, }: ToastTypes): react_jsx_runtime.JSX.Element;

declare function Toasts({ children }: {
    children: ReactNode;
}): react_jsx_runtime.JSX.Element;

type ToastContextTypes = {
    toasts: ToastConfigTypes[];
    addToast: (options: ToastConfigTypes) => void;
    removeToast: (id: number) => void;
};
declare const useToasts: () => ToastContextTypes;

export { Alert, type AlertTypes, Badge, type BadgeTypes, Button, type ButtonTypes, Card, CardBody, type CardBodyTypes, CardFooter, type CardFooterTypes, CardHeader, type CardHeaderTypes, type CardTypes, Checkbox, type CheckboxTypes, Grid, GridItem, type GridItemTypes, type GridTypes, InputDate, type InputDateTypes, InputNumber, type InputNumberTypes, Modal, type ModalConfigTypes, type ModalSizeTypes, type ModalTypes, Modals, Note, Title, type TitleTypes, Toast, type ToastTypes, Toasts, useModals, useToasts };
