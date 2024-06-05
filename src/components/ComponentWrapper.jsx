
export const ComponentWrapper = ({ componentName, children }) => {
    return (
        <div>
            <hr />
            <h1>{componentName}</h1>
            {children}
            <hr />
        </div>
    )
}
