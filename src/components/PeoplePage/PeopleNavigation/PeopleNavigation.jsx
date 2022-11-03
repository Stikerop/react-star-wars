import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import UiButton from "../../UI/UiButton";
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
            <Link to={`/people/?page=${counterPage - 1}`} className={s.link}>
                <UiButton
                    text='Previous'
                    onClick={handleChangePrev}
                    disabled={!prevPage}
                />
            </Link>
            <Link to={`/people/?page=${counterPage + 1}`} className={s.link}>
                <UiButton
                    text="Next"
                    onClick={handleChangeNext}
                    disabled={!nextPage}

                />

            </Link>
        </div>
    );
    PeopleNavigation.propTypes = {
        getResource: PropTypes.func,
        prevPage: PropTypes.string,
        nextPage: PropTypes.string,
        counterPage: PropTypes.number,
    }
};

export default PeopleNavigation;