import React from "react";
import styled from "styled-components";
import { useTable } from "react-table";

// import namor from 'namor'

const range = (len: any) => {
  const arr = [];
  for (let i: number = 0; i < len; i++) {
    //@ts-ignore
    arr.push(i);
  }
  return arr;
};

// const newPerson = () => {
//     const statusChance = Math.random()
//     return {
//         firstName: namor.generate({ words: 1, numbers: 0 }),
//         lastName: namor.generate({ words: 1, numbers: 0 }),
//         age: Math.floor(Math.random() * 30),
//         visits: Math.floor(Math.random() * 100),
//         progress: Math.floor(Math.random() * 100),
//         status:
//             statusChance > 0.66
//                 ? 'relationship'
//                 : statusChance > 0.33
//                     ? 'complicated'
//                     : 'single',
//     }
// }

function makeData(...lens: any) {
  // const makeDataLevel = (depth = 0): any => {
  //     const len = lens[depth]
  //     return range(len).map(d => {
  //         return {
  //             ...newPerson(),
  //             subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
  //         }
  //     })
  // }
  // return makeDataLevel()
}

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

function Table({ columns, data }: any) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup: any) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row: any, i: any) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell: any) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default function ReactTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => makeData(20), []);

  return (
    <Styles>
      <Table columns={columns} data={data} />
    </Styles>
  );
}
