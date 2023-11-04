export default function TitleSection(props) {
    return (
        <div className="header-section">
            <h2>{props.subheader}</h2>
            <h1>{props.header}</h1>
        </div>
    )
}