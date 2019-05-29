import { Navigation } from "../navtypes";

export const mockNavigation: Navigation = {
    heading: 'Main heading',
    sections: [
        {
            title: 'Section One',
            href: '#section-one',
            subSections: [
                {
                    title: 'SubSectionOne',
                    href: '#sub-section-one',
                    items: [
                        { label: 'itemOne1a', href: '#itemOne1a' },
                        { label: 'itemOne2a', href: '#itemOne2a' },
                        { label: 'itemOne3a', href: '#itemOne3a' },
                        { label: 'itemOne4a', href: '#itemOne4a' },
                    ]
                },
                {
                    title: 'SubSectionTwo',
                    href: '#sub-section-two',
                    items: [
                        { label: 'itemOne1b', href: '#itemOne1b' },
                        { label: 'itemOne2b', href: '#itemOne2b' },
                        { label: 'itemOne3b', href: '#itemOne3b' },
                        { label: 'itemOne4b', href: '#itemOne4b' },
                    ]
                },
                {
                    title: 'SubSectionThree',
                    href: '#sub-section-three',
                    items: [
                        { label: 'itemOne1c', href: '#itemOne1c' },
                        { label: 'itemOne2c', href: '#itemOne2c' },
                        { label: 'itemOne3c', href: '#itemOne3c' },
                        { label: 'itemOne4c', href: '#itemOne4c' },
                    ]
                },
            ]
        },
        {
            title: 'Section Two',
            href: '#section-two',
            subSections: [
                {
                    title: 'SubSection2One',
                    href: '#sub-section-2one',
                    items: [
                        { label: 'itemTwo1a', href: '#itemTwo1a' },
                        { label: 'itemTwo2a', href: '#itemTwo2a' },
                        { label: 'itemTwo3a', href: '#itemTwo3a' },
                        { label: 'itemTwo4a', href: '#itemTwo4a' },
                    ]
                },
                {
                    title: 'SubSection2Two',
                    href: '#sub-section-2two',
                    items: [
                        { label: 'itemTwo1b', href: '#itemTwo1b' },
                        { label: 'itemTwo2b', href: '#itemTwo2b' },
                        { label: 'itemTwo3b', href: '#itemTwo3b' },
                        { label: 'itemTwo4b', href: '#itemTwo4b' },
                    ]
                },
                {
                    title: 'SubSection2Three',
                    href: '#sub-section-2three',
                    items: [
                        { label: 'itemTwo1c', href: '#itemTwo1c' },
                        { label: 'itemTwo2c', href: '#itemTwo2c' },
                        { label: 'itemTwo3c', href: '#itemTwo3c' },
                        { label: 'itemTwo4c', href: '#itemTwo4c' },
                    ]
                },
            ]
        },
        {
            title: 'Section Three',
            href: '#section-three',
            subSections: [
                {
                    title: 'SubSection3One',
                    href: '#sub-section-3one',
                    items: [
                        { label: 'item1aThree', href: '#item1aThree' },
                        { label: 'item2aThree', href: '#item2aThree' },
                        { label: 'item3aThree', href: '#item3aThree' },
                        { label: 'item4aThree', href: '#item4aThree' },
                    ]
                },
                {
                    title: 'SubSection3Two',
                    href: '#sub-section-3two',
                    items: [
                        { label: 'item1bThree', href: '#item1bThree' },
                        { label: 'item2bThree', href: '#item2bThree' },
                        { label: 'item3bThree', href: '#item3bThree' },
                        { label: 'item4bThree', href: '#item4bThree' },
                    ]
                },
                {
                    title: 'SubSection3Three',
                    href: '#sub-section-3three',
                    items: [
                        { label: 'item1cThree', href: '#item1cThree' },
                        { label: 'item2cThree', href: '#item2cThree' },
                        { label: 'item3cThree', href: '#item3cThree' },
                        { label: 'item4cThree', href: '#item4cThree' },
                    ]
                },
            ]
        },
    ]
}
