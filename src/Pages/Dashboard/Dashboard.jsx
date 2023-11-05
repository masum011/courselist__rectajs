import React, { useEffect, useState } from "react";
import Layout from "../../Layout/Layout";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminData } from "./dashboardSlice";
export default function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state) => state.userinfo);
  const [progress, setProgress] = useState(60);
  useEffect(() => {
    dispatch(fetchAdminData());
  }, []);
  return (
    <div className="student--dashboard-ui">
      <div className="course--detalis--navigate">
        <span class="material-symbols-outlined" onClick={() => navigate("/")}>
          arrow_back_ios
        </span>
        <p>Back to Home</p>
      </div>
      {/* <Layout> */}
      {loading ? (
        <p className="text-center">loading...</p>
      ) : (
        <div className="admin--coursedetalis">
          <div className="user--img">
            <img src={data?.profileUrl} alt="user-avtar" />
          </div>
          <p>{data?.name}</p>
          <p>{data?.roll}</p>
          <p>{data?.mobile}</p>
          <p>{data?.code}</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}>
              {`${progress}%`}
            </div>
          </div>
        </div>
      )}

      <div className="student--enroll">
        {data?.enroll?.map((item) => (
          <div className="admin--course">
            <img src={item?.thumbnail} alt="url" />
            <div className="courselist">
              <p>{item?.coursename}</p>
              <p>{item?.date}</p>
            </div>
          </div>
        ))}
      </div>
      {/* </Layout> */}
    </div>
  );
}
