import React, { PureComponent } from 'react';
import CustomScroll from 'react-custom-scroll';
import 'react-custom-scroll/dist/customScroll.css';
import Styles from '@assets/scss/popup.scss';
class Scrollbars extends PureComponent {
    render() {
        return (
            <CustomScroll
                {...this.props}
                allowOuterScroll={true}
                heightRelativeToParent="100%"
                // renderTrackHorizontal={(props) => {
                //     console.log('renderTrackHorizontal', props);
                //     return <div className={Styles.track_horizontal} />;
                // }}
                // renderTrackVertical={(props) => {
                //     console.log('renderTrackVertical', props);
                //     return <div className={Styles.track_vertical} />;
                // }}
                // renderThumbHorizontal={(props) => {
                //     console.log('renderThumbHorizontal', props);
                //     return <div {...props} className={Styles.thumb_horizontal} />;
                // }}
                // renderThumbVertical={(props) => {
                //     console.log('renderThumbVertical', props);
                //     return <div {...props} className={Styles.thumb_vertical} />;
                // }}
            >
                {this.props.children}
            </CustomScroll>
        );
    }
}

export default Scrollbars;
