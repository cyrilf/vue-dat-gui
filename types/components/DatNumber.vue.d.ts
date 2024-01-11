declare const _default: import("vue").DefineComponent<{
    modelValue: {
        required: true;
        type: import("vue").PropType<any>;
    };
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    min: {
        type: import("vue").PropType<number>;
    };
    max: {
        type: import("vue").PropType<number>;
    };
    showSlider: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    step: {
        type: import("vue").PropType<number>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        required: true;
        type: import("vue").PropType<any>;
    };
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    min: {
        type: import("vue").PropType<number>;
    };
    max: {
        type: import("vue").PropType<number>;
    };
    showSlider: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    step: {
        type: import("vue").PropType<number>;
    };
}>>, {
    label: string;
    showSlider: boolean;
}, {}>;
export default _default;
