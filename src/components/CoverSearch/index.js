import React from 'react'

const CoverSearch = () => {
    return (
        <header class="masthead text-white text-center">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <form>
                            <div class="form-row">
                                <div class="col-12 col-md-12 mb-2 mb-md-0">
                                    <input type="email" class="form-control form-control-lg" placeholder="Buscar por zona" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default CoverSearch;