export default function BoundingBox(props) {
    return (
        props.coords &&
        <div
            className="bounding-box"
            style={{
                width: '50px',
                height: '50px',
                left: props.coords.x - 25,
                top: props.coords.y - 25,
            }}
        >
        </div>
    );
};