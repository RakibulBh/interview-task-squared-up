import { DataObject } from "api/types";

const priorityOrder = {
    high: 0,
    normal: 1,
    low: 2,
} as const;

export function classNames(...classes: unknown[]): string {
    return classes.filter(Boolean).join(" ");
}

export function sortAsc(a: DataObject, b: DataObject) {
    return (
        priorityOrder[a.priority as keyof typeof priorityOrder] -
        priorityOrder[b.priority as keyof typeof priorityOrder]
    );
}

export function sortDesc(a: DataObject, b: DataObject) {
    return (
        priorityOrder[b.priority as keyof typeof priorityOrder] -
        priorityOrder[a.priority as keyof typeof priorityOrder]
    );
}
