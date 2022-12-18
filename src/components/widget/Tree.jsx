import Theme from '@utils/Theme';
import _floor from 'lodash/floor';

const Tree = (props) => {
    const theme = Theme.getStyle('popup');
    const { source = {}, onClose, isIframe, title } = props;
    const treeHtml = drawTree(source);

    return (
        <div className={theme.dimmed}>
            <div className={isIframe ? theme.center_chart : theme.center}>
                <div className={theme.modal}>
                    <div className={theme.head}>
                        <div className={theme.text}>{title}</div>
                        <div
                            className={theme.close}
                            id="chart_btn"
                            onClick={() => {
                                onClose();
                            }}
                        />
                    </div>
                    <div className={theme.body}>
                        <div className={theme.tree_container}>
                            <div className={theme.tree}>
                                <div dangerouslySetInnerHTML={{ __html: treeHtml }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tree;

const drawTree = ({ graphData, fields, valueMap }) => {
    const { splitColumn, splitValue, distribution, left, right } = graphData;
    let feature = null;
    let prediction = null;
    if (splitColumn !== null && splitColumn !== undefined) {
        feature = fields[splitColumn + 1];
    }
    if (distribution !== null && distribution !== undefined) {
        const arr =
            (distribution.data ? Array.from(distribution.data[0]) : distribution?.[0]) || [];
        const sorted = [...arr].sort((a, b) => b - a);
        const maxRowIndex = arr.indexOf(sorted[0]);
        prediction = valueMap[maxRowIndex + 1];
    }
    // leaf
    if (!left && !right) {
        return [
            '<ul>',
            '<li>',
            '<a href="#">',
            '<b>',
            prediction,
            '</b>',
            '</a>',
            '</li>',
            '</ul>',
        ].join('');
    }
    return [
        '<ul>',
        '<li>',
        '<a href="#">',
        '<b>',
        feature,
        '<',
        _floor(splitValue, 2),
        '</b>',
        '</a>',
        '<ul>',
        '<li>',
        '<a href="#">yes</a>',
        drawTree({ graphData: left, fields, valueMap }),
        '</li>',
        '<li>',
        '<a href="#">no</a>',
        drawTree({ graphData: right, fields, valueMap }),
        '</li>',
        '</ul>',
        '</li>',
        '</ul>',
    ].join('');
};
