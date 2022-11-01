import React, {useState, useRef} from "react";

//리액트에서는 직접 돔으로 접근하는 것을 좋아하지 않음
//document.querySelector(선택자) => X

const TestRef = () => {
    const [myImage, setMyImage] = useState([]);
    const fileRef = useRef(); //useRef()의 역할은 1차적으로 값을 저장할 수 있음 / 2차적으로 요소도 하나의 값으로 저장가능(한번 선언만으로도 렌더링시 유지될 수 있음)

    //파일 트리거(trigger) 현상을 막기 위함 : 동일한 이미지를 연속적으로 업로드하는 경우, 먹통현상을 막기 위함
    const onInputClick = (e) => {
        e.target.value = ""; 
    } 

    const addImage = (e) => {
        //console.log(e.target)
        let ImgArr = Object.entries(e.target.files).map(e => URL.createObjectURL(e[1])); //새로 업로드한 이미지
        setMyImage([...myImage, ...ImgArr]);
    }

    const handleFileBtnClick = (e) => {
        e.preventDefault();
        fileRef.current.click(); // <input type="file"> 에서 클릭한 과정과 동일
    }

    const deleteImgBox = index => {
        const deleteExcute = myImage.filter((item, idx) => idx !== index); //사용자가 삭제 버튼을 클릭하지 않은 곳만 필터링한다.
        setMyImage(deleteExcute);
    }
    console.log(myImage);

    return (
        <>
            <h3>이미지 파일 넣기</h3>
            <button type="button" onClick={handleFileBtnClick}>이미지 추가하기</button>

            <hr />
            <label onChange={addImage} htmlFor="input-files">
                <input ref={fileRef} type="file" hidden={false} accept=".jpg, .png" multiple="multiple" disabled={myImage.length === 2} onClick={onInputClick}/>
            </label>

            <div>
                {myImage && myImage.map((v,i) => (
                    <div key={i}>
                        <img src={v} />
                        <button onClick={() => deleteImgBox(i)}>삭제</button>
                    </div>
                ))}
            </div>

        </>
    );
}
export default TestRef;