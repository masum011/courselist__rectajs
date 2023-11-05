import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchUserDatabyId } from "./homeSlice";

export default function HomeDetalis() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const { data,loading } = useSelector((state) => state.home);
  const {state}=useLocation()

  const {userId}=state;
  useEffect(()=>{
    dispatch(fetchUserDatabyId(userId))
  },[])
  return (
    <div className="courseDetalis--root">
      <div className="course--detalis--navigate">
        <span class="material-symbols-outlined" onClick={()=>navigate('/')}>arrow_back_ios</span>
        <p>Back to Course List</p>
      </div>
      <div className="course--detalis">
      {loading ? (
        <p className="text-center">loading...</p>
      ) : (
        <div>
          <img src={data?.thumbnail} alt="" />
          <p>{data?.name}</p>
          <p>{data?.instructor}</p>
          <p>{data?.description}</p>
          <p>{data?.enrollmentStatus}</p>
          <p>{data?.duration}</p>
          <p>{data?.schedule}</p>
          <p>{data?.location}</p>
          <p>{data?.prerequisites}</p>
          <div className="course--reference">
            {data?.students?.map((item) => (
              <div className="reference--card">
                <img src={item?.age} alt="url" />
                <p>{item?.name}</p>
                <div className="duration--status">
                  <p>{item?.duration}</p>
                  <p>{item?.Enrollment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
