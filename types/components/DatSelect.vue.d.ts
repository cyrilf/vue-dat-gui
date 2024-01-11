interface Item {
    name: string;
    value: string;
}
declare const _default: import("vue").DefineComponent<{
    modelValue: import("vue").PropType<any>;
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    items: {
        type: import("vue").PropType<Item[]>;
        default: () => never[];
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: import("vue").PropType<any>;
    label: {
        type: import("vue").PropType<string>;
        default: string;
    };
    items: {
        type: import("vue").PropType<Item[]>;
        default: () => never[];
    };
}>>, {
    label: string;
    items: Item[];
}, {}>;
export default _default;
