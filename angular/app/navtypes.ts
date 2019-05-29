export interface Navigation {
    heading: string,
    sections: Section[],
}

interface Section {
    title: string,
    href: string,
    subSections: SubSection[],
    active?: boolean,
}

export interface SubSection {
    title: string,
    href: string,
    items: Item[],
    active?: boolean,
}

interface Item {
    label: string,
    href: string,
}
