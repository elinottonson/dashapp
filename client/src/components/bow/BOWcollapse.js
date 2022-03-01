import React from 'react';
import useCollapse from 'react-collapsed';
import BOW from './BOW';
import '../../styles/collapse.css';

function Collapse_bow_maker() {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Bag of Words ^' : 'Bag of Words v'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                <BOW />
            </div>
        </div>
    </div>
    );
}
function BOWcollapse() {
    return (
    <Collapse_bow_maker/>
    );
}
export default BOWcollapse;
