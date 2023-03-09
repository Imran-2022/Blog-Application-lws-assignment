import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortSelected, statusSelected } from '../../features/filter/filterSlice';

const SideBar = () => {
  // statusSelected,sortSelected
  const dispatch=useDispatch();
  const [sort,setSort]=useState('default');
  const [status,setStatus]=useState('all');

  useEffect(()=>{
    dispatch(statusSelected(status))
  },[status])
  useEffect(()=>{
    dispatch(sortSelected(sort))
  },[sort])


  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content">
          <h4>Sort</h4>
          <select name="sort" onChange={(e)=>setSort(e.target.value)} id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input type="radio" onChange={()=>setStatus("all")} name="filter" id="lws-all" defaultChecked className="radio" />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input type="radio"  onChange={()=>setStatus("saved")} name="filter" id="lws-saved" className="radio" />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;