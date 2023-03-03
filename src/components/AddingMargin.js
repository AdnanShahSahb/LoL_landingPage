import AddingShadow from "./AddingShadow";

const PageBreaker = () => {

    return (
        <div style={{
            background: '#000',
            height: '30px',
            width: '100vw',
            // border: 'solid purple',
            // boxShadow: '0 0 80px 80px black inset ',
        }}>
            <AddingShadow />
        </div>

    )
}
export default PageBreaker;