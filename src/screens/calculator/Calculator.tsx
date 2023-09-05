import React, { createContext, useState } from 'react'
import { Text } from 'react-native'
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Figures from './Figures';
import ReviewScreen from './Review';
import Figure1 from '../../components/figures/Figure1';
import Figure2 from '../../components/figures/Figure2';
import Figure3 from '../../components/figures/Figure3';

export interface IFigure {
    name: string,
    source: any,
    type: 'right' | 'obtuse' | 'trapezoid',
    picked: boolean,
    messurements: any,
    component: () => Element,
    resolve: () => number
}



const Calculator = () => {

    const [figures, setFigures] = useState<IFigure[]>([
        {
            name: 'Figure 1',
            type: 'right',
            source: require('../../../assets/imgs/Figure1.png'),
            picked: false,
            messurements: {
                b: '',
                c: ''
            },
            component() {
                return (<Figure1 figure={this} />)
            },
            resolve() {
                const b = parseFloat(this.messurements.b)
                const c = parseFloat(this.messurements.c)

                return Math.sqrt(c ** 2 - b ** 2)
            }
        },
        {
            name: 'Figure 2',
            type: 'obtuse',
            source: require('../../../assets/imgs/Figure2.png'),
            picked: false,
            messurements: {
                a: '',
                b: '',
                c: '',
                d: '',
                e: '',
                f: '',
            },
            component() {
                return (<Figure2 figure={this} />)
            },
            resolve() {
                const a = parseFloat(this.messurements.a)
                const b = parseFloat(this.messurements.b)
                const c = parseFloat(this.messurements.c)
                const d = parseFloat(this.messurements.d)
                const e = parseFloat(this.messurements.e)
                const f = parseFloat(this.messurements.f)

                return Math.sqrt(((a - c + e) ** 2) + ((b + d + f) ** 2))
            }
        },
        {
            name: 'Figure 3',
            type: 'trapezoid',
            source: require('../../../assets/imgs/Figure3.png'),
            picked: false,
            messurements: {
                b: '',
                c: '',
                d: '',
            },
            component() {
                return (<Figure3 figure={this} />)
            },
            resolve() {
                const b = parseFloat(this.messurements.b)
                const c = parseFloat(this.messurements.c)
                const d = parseFloat(this.messurements.d)

                const P = 29.83

                return Math.round((P - b - c - d) * 100) / 100
            }
        }
    ])

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'figures', title: 'Figures' },
        { key: 'review', title: 'Review' },
    ]);

    const toggle = (figure: IFigure) => {
        figure.picked = !figure.picked
        setFigures([...figures])
    }

    const renderScene = ({ route }) => {
        switch (route.key) {
            case 'figures':
                return <Figures figures={figures} toggle={toggle} />
            case 'review':
                return <ReviewScreen figures={figures.filter(el => el.picked)} />;
            default:
                return null;
        }
    };



    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    )
}

export default Calculator