import {React, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {withErrorApi } from "@hoc-helpers/withErrorApi";
import PeopleList from "../PeopleList/PeopleList";
import peopleNavigation from "../PeopleNavigation/PeopleNavigation";
import {getApiResource, changeHTTP} from "@utils/network";
import {getPeopleId, getPeopleImage, getPeoplePageId} from "@services/getPeopleData";
import {API_PEOPLE} from "@constants/api";
import {useQueryParams} from "@hooks/useQueryParams";
import PeopleNavigation from "../PeopleNavigation/PeopleNavigation";

const PeoplePage = ({setErrorApi}) => {
    const [people, setPeople] = useState('');
    const [prevPage, setPrevPage] = useState('');
    const [nextPage, setNextPage] = useState('');
    const [counterPage, setCounterPage] = useState(1);


    const query = useQueryParams();
    const queryPage = query.get('page');

    const getResource = async (url) => {
        const res = await getApiResource( url);

        if (res) {
            const peopleList = res.results.map(({name, url}) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);

                return {
                    id,
                    name,
                    img
                }
            })
            setPeople(peopleList);
            setPrevPage(changeHTTP(res.previous));
            setCounterPage(getPeoplePageId(url));
            setNextPage(changeHTTP(res.next));
            setErrorApi(false);
        } else {
            setErrorApi(true);
        }
    }

    useEffect(() => {
        getResource(API_PEOPLE + queryPage);
    }, []);

    return (
        <>
            <PeopleNavigation
                getResource={getResource }
                prevPage={prevPage}
                nextPage={nextPage}
                counterPage={counterPage}
            />
            {people && <PeopleList people={people}/>}
        </>
    );
};

PeoplePage.propTypes = {
    setErrorApi: PropTypes.func
}

export default withErrorApi(PeoplePage);

