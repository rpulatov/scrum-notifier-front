import React from 'react';
import { Card } from 'antd';
import Forma from './Forma';

export default function Cardd() {

    const Style = {
        marginLeft: '50em',
        marginRight: 'auto',
        marginTop: '18em'
      };

    return (
        <div style = {Style}>
            <Card title="Авторизация"  style={{ width: 450 }}>
                <p>
                    <Forma/>
                </p>
            </Card>
        </div>
    );
}