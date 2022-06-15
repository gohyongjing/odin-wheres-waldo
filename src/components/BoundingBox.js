export default function BoundingBox(props) {
    return (
        props.coords &&
        <div
            className="bounding-box"
            style={{
                width: '50px',
                height: '50px',
                left: props.coords[0] - 25,
                top: props.coords[1] - 25,
            }}
        >
        </div>
    );
};