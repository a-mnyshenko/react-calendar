import React from "react";

const AsideIcon = ({ icon, isActive }) => {
  const svg = {
    calendar: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill={isActive ? "#a3a0fb" : "#A5A4BF"}>
        <path d='M2,5v9H14V5ZM13,2h2a.945.945,0,0,1,1,1V15a.945.945,0,0,1-1,1H1a.945.945,0,0,1-1-1V3A.945.945,0,0,1,1,2H3V1A.945.945,0,0,1,4,0,.945.945,0,0,1,5,1V2h6V1a1,1,0,0,1,2,0ZM12,12H10V10h2ZM9,12H7V10H9Zm3-3H10V7h2ZM9,9H7V7H9ZM6,12H4V10H6Z' />
      </svg>
    ),
    customers: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='17'
        version='1.1'
        stroke={isActive ? "#a3a0fb" : "#A5A4BF"}
        fill='none'>
        <g strokeWidth='2.5'>
          <rect x='4.82' y='2' rx='3' ry='3' width='6' height='7' />
        </g>
        <path d='M 1 16 L 15 16 C 14 11 1 10 1 17 z' strokeWidth='2.5' />
      </svg>
    ),
    dashboard: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        version='1.1'
        fill={isActive ? "#a3a0fb" : "#A5A4BF"}>
        <g strokeWidth='0px'>
          <rect x='0' y='10' rx='1' ry='1' width='4' height='6' />
          <rect x='6' y='0' rx='1' ry='1' width='4' height='16' />
          <rect x='12' y='5' rx='1' ry='1' width='4' height='11' />
        </g>
      </svg>
    ),
    help: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill={isActive ? "#a3a0fb" : "#A5A4BF"}>
        <path d='M8,0a8,8,0,1,0,8,8A8.024,8.024,0,0,0,8,0ZM8,10a2,2,0,1,1,2-2A2.006,2.006,0,0,1,8,10ZM8,2a5.834,5.834,0,0,1,2.6.6L9.044,4.156a3.591,3.591,0,0,0-2.089,0L5.4,2.6A5.834,5.834,0,0,1,8,2ZM2,8a5.834,5.834,0,0,1,.6-2.6L4.156,6.956a3.591,3.591,0,0,0,0,2.089L2.6,10.6A5.834,5.834,0,0,1,2,8Zm6,6a5.834,5.834,0,0,1-2.6-.6l1.556-1.556a3.591,3.591,0,0,0,2.089,0L10.6,13.4A5.834,5.834,0,0,1,8,14Zm5.4-3.4L11.844,9.044a3.591,3.591,0,0,0,0-2.089L13.4,5.4a5.933,5.933,0,0,1,0,5.2Z' />
      </svg>
    ),
    home: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill={isActive ? "#a3a0fb" : "#A5A4BF"}>
        <path
          d='M15.581,5.186l-7-5a1,1,0,0,0-1.162,0l-7,5A1,1,0,0,0,1.581,6.814L2,6.515V15a1,1,0,0,0,1,1H13a1,1,0,0,0,1-1V6.515A1.7,1.7,0,0,0,15,7a1,1,0,0,0,.582-1.814ZM12,14H10V11a2,2,0,0,0-4,0v3H4V5.086L8,2.229l4,2.857Z'
          transform='translate(0)'
        />
      </svg>
    ),
    inbox: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='14'
        viewBox='0 0 16 14'
        fill={isActive ? "#a3a0fb" : "#A5A4BF"}>
        <path
          d='M15,1H1A1,1,0,0,0,0,2V14a1,1,0,0,0,1,1H15a1,1,0,0,0,1-1V2A1,1,0,0,0,15,1ZM14,13H2V6.723L7.5,9.868a1,1,0,0,0,.992,0L14,6.723Zm0-8.58L8,7.849,2,4.42V3H14Z'
          transform='translate(0 -1)'
        />
      </svg>
    ),
    invoices: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='16'
        viewBox='0 0 14 16'
        fill={isActive ? "#a3a0fb" : "#A5A4BF"}>
        <path
          d='M14,0H2A.945.945,0,0,0,1,1V16l3-2,2,2,2-2,2,2,2-2,3,2V1A.945.945,0,0,0,14,0ZM12,10H4V8h8Zm0-4H4V4h8Z'
          transform='translate(-1)'
        />
      </svg>
    ),
    chat: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        version='1.1'
        stroke={isActive ? "#a3a0fb" : "#A5A4BF"}
        fill={isActive ? "#a3a0fb" : "#A5A4BF"}>
        <g strokeWidth='1' strokeLinejoin='round'>
          <rect x='0' y='0' rx='1' ry='1' width='12' height='9' stroke='none' />
          <path d='M 3 11.5 L 3 9 6 9 z' />
          <path d='M 13.4 3 L 15.3 3 15.3 12.8 5.2 12.8 7.5 10.9 13.4 10.9' />
          <path d='M 13.5 12 L 13.5 15.6 9.8 12 z' />
        </g>
      </svg>
    ),
    products: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        version='1.1'
        fill={isActive ? "#a3a0fb" : "#A5A4BF"}>
        <g strokeWidth='0px'>
          <rect x='0' y='0' rx='0' ry='0' width='2' height='16' />
          <rect x='3' y='0' rx='0' ry='0' width='2' height='11' />
          <rect x='6' y='0' rx='0' ry='0' width='4' height='11' />
          <rect x='11' y='0' rx='0' ry='0' width='2' height='11' />
          <rect x='14' y='0' rx='0' ry='0' width='2' height='16' />
        </g>
      </svg>
    ),
    settings: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill={isActive ? "#a3a0fb" : "#A5A4BF"}>
        <path d='M13.3,5.2l1.1-2.1L13,1.7,10.9,2.8a3.582,3.582,0,0,0-1.1-.4L9,0H7L6.2,2.3a4.179,4.179,0,0,0-1,.4L3.1,1.6,1.6,3.1,2.7,5.2a4.179,4.179,0,0,0-.4,1L0,7V9l2.3.8c.1.4.3.7.4,1.1L1.6,13,3,14.4l2.1-1.1a3.582,3.582,0,0,0,1.1.4L7,16H9l.8-2.3c.4-.1.7-.3,1.1-.4L13,14.4,14.4,13l-1.1-2.1a3.582,3.582,0,0,0,.4-1.1L16,9V7l-2.3-.8A4.179,4.179,0,0,0,13.3,5.2ZM8,11A2.946,2.946,0,0,1,5,8,2.946,2.946,0,0,1,8,5a2.946,2.946,0,0,1,3,3A2.946,2.946,0,0,1,8,11Z' />
      </svg>
    ),
  };
  return svg[`${icon}`] || null;
};

export default AsideIcon;
