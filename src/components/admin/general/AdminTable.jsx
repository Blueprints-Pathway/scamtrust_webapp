import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminTable = (props) => {
  
    return (
        <table className=' w-[100%] overflow-x-scroll overflow-y-scroll mb-5 md:w-[100%] lg:w-[100%] lg:mb-7 xl:w-[100%]'>
        {/* TABLE HEAD */}
    <thead>
      <tr>
        {props.headings.map((item, index) => {
          return <th className='pr-2 py-4 text-[8px] font-normal text-[#A6A6A6] md:text-[9px] lg:text-[10px] xl:text-[12px]' scope='col'>{item}</th>

        })}
        
      </tr>
    </thead>

               {/* TABLE BODY */}
    <tbody className='mt-7'>
       {props.items.map((item, index) => { 
        let shouldColor = (index % 2 ) === 0;
        let content = [];
      for (let index = 0; index < item.length; index++) {
         content.push(<td className='w-16 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-t-[1px] border-[#adabab]'>{item[index]}</td>)
        }
        return(
      <tr onClick={props.onClick}
      className= {shouldColor ?  'bg-[#EBEBEB] mt-8 w-20 h-20 lg:h-16' : 'bg-white w-20 mt-8 h-20 lg:h-16'} >
           {content}
        {/* <td className='pr-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-b-[1px] border-[#adabab]'>{item[index]}</td> */}
        {/* <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-b-[1px] border-[#adabab]'>{item.userID}</td>
        <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-b-[1px] border-[#adabab]'>{item.balance}</td>
        <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-b-[1px] border-[#adabab]'>{item.phone}</td>
        <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-b-[1px] border-[#adabab]'>{item.lastActive}</td>
        <td className='px-2 py-2 text-[8px] text-center font-normal md:text-[9px] xl:text-[12px] border-b-[1px] border-[#adabab]'>{item.withdrawalStatus}</td> */}
           {item.status}
      </tr>)}
      )}

    </tbody>
    
  </table>
    );
};

export default AdminTable;