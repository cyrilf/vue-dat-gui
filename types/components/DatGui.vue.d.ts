declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    modelValue: import("vue").PropType<any>;
    closed: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    openText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closeText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closePosition: {
        type: import("vue").PropType<"top" | "bottom">;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<any>;
    closed: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    openText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closeText: {
        type: import("vue").PropType<string>;
        default: string;
    };
    closePosition: {
        type: import("vue").PropType<"top" | "bottom">;
        default: string;
    };
}>>, {
    closed: boolean;
    openText: string;
    closeText: string;
    closePosition: "top" | "bottom";
}, {}>, {
    default?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
