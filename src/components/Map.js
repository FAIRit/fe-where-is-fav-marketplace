import React, {Component} from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import Tooltip from "./Tooltip";
import L from 'leaflet'

export const pointerIcon = new L.Icon({
    iconUrl: './assets/parsley.svg',
    iconSize: [100, 100],
});

export default class Map extends Component {

    render() {
        const {data: block} = this.props;
        const centerL = block.markets.reduce( (p, c) =>  p+parseFloat(c.lalt),0) / block.markets.length;
        const centerH = block.markets.reduce( (p, c) =>  p+parseFloat(c.halt),0) / block.markets.length;

        return (


            <LeafletMap
                center={[centerL, centerH]}
                zoom={12}
                // maxZoom={20}
            >
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {block.markets.map( el =>

                    <Marker position={[el.lalt, el.halt]} key={el.name}
                            icon={pointerIcon}>
                        <Popup>
                            <Tooltip item={el} block_name={block.name}/>
                        </Popup>
                    </Marker>
                )}
            </LeafletMap>
        );
    }
}


