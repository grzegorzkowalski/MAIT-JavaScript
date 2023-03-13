const Chapter02Task03 = () => {
    const greenDiv
        =  <div style={{
            backgroundColor: "green",
            width: "200px",
            height: "200px"
    }} />;
    const redDiv
        =  <div style={{
        backgroundColor: "red",
        width: "200px",
        height: "200px"
    }} />;
    const blueDiv
        =  <div style={{
        backgroundColor: "blue",
        width: "200px",
        height: "200px"
    }} />;

    return (
        <>
            {blueDiv}
            {redDiv}
            {greenDiv}
        </>
    );
};

export default Chapter02Task03;
