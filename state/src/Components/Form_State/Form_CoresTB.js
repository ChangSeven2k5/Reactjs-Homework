import React, { Component, useState } from 'react';

function Form_CoresTB() {
    const [diemToan, setToan] = useState(0);
    const [diemLy, setLy] = useState(0);
    const [diemTB, setTB] = useState(0);
    const [xepLoai, setXepLoai] = useState("");

    const tinhDiemTB = () => {
        const tb = (Number(diemToan) + Number(diemLy))/2;
        setTB(tb);
        if(tb >= 9) {
            setXepLoai("Xuất sắc")
        } 
        else if (tb >= 8) {
            setXepLoai("Giỏi")
        }
        else if (tb >= 7) {
            setXepLoai("Khá")
        }
        else if (tb >= 5) {
            setXepLoai("Trung Bình")
        }
        else {
            setXepLoai("Yếu")
        }
    }
    const buttonSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={buttonSubmit}>
                <div>
                    Điểm Toán:
                    <input value={diemToan} type='number' onChange={(e) => (setToan(e.target.value))}></input>
                </div>
                <div>
                    Điểm Lý: 
                    <input value={diemLy} type='number' onChange={(e) => (setLy(e.target.value))}></input>
                </div>
                <div> Điểm Trung Bình: {diemTB}</div>
                
                <button type='button' onClick={tinhDiemTB}>OK</button>
                <h3> Xếp loại: {xepLoai}</h3>
            </form>
        </div>
    );
}

export default Form_CoresTB;