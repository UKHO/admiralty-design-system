
export interface MenuItem {
    title: string,
    href?: string,
    active?: boolean,
}

export interface SubSection extends MenuItem {
    items: MenuItem[],
}

export interface Section extends MenuItem {
    subSections: SubSection[],
}

export interface Navigation {
    heading: string,
    sections: Section[],
}
