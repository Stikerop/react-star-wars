import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import s from './PeopleNavigation.module.css'

const PeopleNavigation = ({
                              getResource,
                              prevPage,
                              nextPage,
                              counterPage
                          }) => {
    const handleChangeNext = () => getResource(nextPage);
    const handleChangePrev = () => getResource(prevPage);

    return (
        <div>
            <Link to={`/people/?page=${counterPage-1}`} className={s.link}>
                <button
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                    className={s.buttons}
                >
                    Previous
                </button>
            </Link>
            <Link to={`/people/?page=${counterPage+1}`} className={s.link}>
                <button
                    onClick={handleChangeNext}
                    disabled={!nextPage}
                    className={s.buttons}
                >
                    Next
                </button>
            </Link>
        </div>
    );
    PeopleNavigation.propTypes={
        getResource: PropTypes.func,
        prevPage: PropTypes.string,
        nextPage: PropTypes.string,
        counterPage: PropTypes.number,
    }
};

export default PeopleNavigation;