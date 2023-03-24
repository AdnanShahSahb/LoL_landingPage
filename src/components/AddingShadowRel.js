const AddingShadowRel = (props) => {
    return (
        <div style={{
            background: '#000',
            // zIndex: '20',
            // zIndex: '2',
            position: 'absolute',

            width: props.pos == 'right' ? '10px' : '100vw',
            height: props.pos == 'right' ? '70vh' : '30px',
            marginTop: props.pos == 'up' && '-40px',
            marginTop: props.pos == 'right' && '0px',
            marginTop: props.pos == 'down' && '0px',
            marginLeft: props.pos == 'right' && '55%',
            // border: 'solid pink',
            boxShadow: '0 0 80px 80px #000',
            // 
            // boxShadow: '0 0 80px 80px black inset ',
        }}></div>

    )
}
export default AddingShadowRel;