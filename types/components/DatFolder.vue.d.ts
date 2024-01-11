declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: import("vue").PropType<any>;
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closed: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<any>;
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closed: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>>, {
    label: string;
    closed: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
