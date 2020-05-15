import React from 'react'

function Pagination(props) {
    const { total_page, has_next_page, has_prev_page, next_page, prev_page, getList } = props;
    
    return total_page > 1
    ?   <div className="pagi">
            { has_prev_page ? <button onClick={ () => getList(prev_page) }>prev</button> : null }
            { has_next_page ? <button onClick={ () => getList(next_page) }>next</button> : null }
        </div>
    : null
}


export default Pagination;
