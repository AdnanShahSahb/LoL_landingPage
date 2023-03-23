import "./paginationLP.scss"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

const PaginationLP = (props) => {
    const pageNumbers = [...Array(props.nPages + 1).keys()].slice(1)

    const nextPage = () => {

        if (props.currentPage == props.nPages) {
            // console.log('limit reached');
            return false
        }

        if (props.currentPage !== props.nPages)
            props.setCurrentPage(props.currentPage + 1)


        if (props.currentPage + 1 > props.maxPaginLimit) {
            props.setMaxPaginLimit(props.maxPaginLimit + 4) // 4 is how much will be added if the limit exceeds
            props.setMinPaginLimit(props.minPaginLimit + 4) // 4 is how much will be added if the limit exceeds
        }

    }
    const prevPage = () => {

        if (props.currentPage - 1 == 0) {
            // console.log('limit reached');
            return false
        }

        if (props.currentPage !== 1)
            props.setCurrentPage(props.currentPage - 1)

        // console.log((props.currentPage - 1) % props.minPaginLimit == 0);

        if ((props.currentPage - 1) % props.minPaginLimit == 0) {
            // console.log('reaching or not');
            props.setMaxPaginLimit(props.maxPaginLimit - 4) // 4 is how much will be added if the limit exceeds
            props.setMinPaginLimit(props.minPaginLimit - 4) // 4 is how much will be added if the limit exceeds
        }
    }
    // console.log(pageNumbers);


    let nextPgNo = null;
    if (props.nPages > props.maxPaginLimit)
        nextPgNo = <li className="page-item ms-1" ><a style={{ padding: '12px', fontSize: '10px' }} className="page-link" >{`>`}{props.nPages - props.maxPaginLimit}</a></li>
    let prevPgNo = null;
    if (props.minPaginLimit >= 1)
        prevPgNo = <li className="page-item me-1" ><a style={{ padding: '12px', fontSize: '10px' }} className="page-link" >{props.minPaginLimit}{`<`}</a></li>

    // console.log(props);

    return (
        <>
            {/* <li key={key} className={`page-item spec ${props.currentPage == d ? 'active' : ''}`}><a className="page-link" onClick={() => {
                props.setCurrentPage(d)
            }}>{d}</a></li> */}

            {/* <br /> */}
            <ol className="carousel-indicators aboutUsIndic position-relative">
            {/* <ol style={{ width: {xs:'100%',sm:'180px'}, marginLeft: '0px', marginTop: {xs:'60px',sm:'10px'} }} className="carousel-indicators position-relative"> */}
                {
                    pageNumbers.map((d, key) => {
                        if (d < props.maxPaginLimit + 1 && d > props.minPaginLimit) {
                            return <li style={{ marginTop: 'auto', marginBottom: 'auto', width: '7px', height: '7px', borderRadius: '100px', }} onClick={() => {
                                props.setCurrentPage(d)
                            }} key={key} className={` ${props.currentPage == d ? 'active' : ''}`}></li>
                        }
                        else
                            return null
                    })
                }

                <div style={{
                    marginLeft: '40px',
                }}>

                    <NavigateBeforeIcon className='hoverBtn' style={{ border: 'solid 1.5px', height: '34px', width: '34px', borderRadius: '100px', marginRight: '10px', }}  onClick={prevPage} />
                    {/* {prevPgNo} */}

                    {/* {nextPgNo} */}
                    <NavigateNextIcon className='hoverBtn' style={{ border: 'solid 1.5px', height: '34px', width: '34px', borderRadius: '100px', }} onClick={nextPage} />
                </div>

            </ol>

        </>
    )
}
export default PaginationLP