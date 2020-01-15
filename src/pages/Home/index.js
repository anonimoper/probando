import React from 'react'
import CoverSearch from '../../components/CoverSearch';
import Card from '../../components/Card';

const Home = () => {
    return (
        <div>
            <CoverSearch />
            <div class="offset-sm-1 col-sm-10">
                <div class="row">
                    <div class="col-sm-3">
                        <Card text="BUSCO UN ANIMAL PERDIDO" />

                    </div>
                    <div class="col-sm-3">
                        <Card text="HE ENCONTRADO UN ANIMAL" />
                    </div>
                    <div class="col-sm-3">
                        <Card text="QUIERO ADOPTAR UN ANIMAL" />
                    </div>
                    <div class="col-sm-3">
                        <Card text="QUIERO COLABORAR CON UNA PROTECTORA" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;