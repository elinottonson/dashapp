import React from 'react';
import {PaginatedList} from 'react-paginated-list';


function bowList(props) {
    var listForShow = props.handler([], 2).list
    var itemCount = listForShow.length;
    const listItems = listForShow.map((d) => <li>{d[0]} : {d[1]}</li>);
    return (
        <div>
            Bag-of-words of input text:
            <PaginatedList
                list={listItems}
                itemsPerPage={20}
                renderList={(list) => (
                <>
                    {list.map((item, id) => {
                    return (
                        <div key={id}>
                        {item}
                        </div>
                    );
                })}
                    </>
                )}
            />
        </div>
    )
}

export default bowList;