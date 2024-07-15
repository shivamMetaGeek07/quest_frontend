"use client"
import { useState, useMemo,useCallback, ReactNode } from "react"
import { User,Tooltip,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell,Pagination } from "@nextui-org/react";

type Column = {
  name: string;
  uid: string;
};
type UserTableProps<T> = {
  data: T[];
  columns: Column[];
  rowsPerPage?: number;
};

interface StarDisplayProps {
  cellValue: number;
}
const StarDisplay: React.FC<StarDisplayProps> = ({ cellValue }) => {
  const stars: JSX.Element[] = [];

  for (let i = 0; i < cellValue; i++) {
    stars.push(<i key={i} className="bi bi-star-fill text-yellow-400 "></i>);
  }

  return <div className="flex flex-row justify-center gap-1 items-center">{stars}</div>;
};

const UserTable = <T extends object>({ data, columns,rowsPerPage }: UserTableProps<T>) => {
    // console.log("data",data);
    const [page, setPage] = useState(1);
    const rowPerPage = rowsPerPage || 10;
    const pages = Math.ceil(data.length / rowPerPage);

    const items = useMemo(() => {
    const start = (page - 1) * rowPerPage;
    const end = start + rowPerPage;

    return data.slice(start, end);
  }, [page, data]);

  const renderCell = useCallback((user:T, columnKey:keyof T): ReactNode => {
    const cellValue = user[columnKey as keyof T];
    switch (columnKey) {
      case "id":
      return (
        <div className="capitalize w-[40%] mx-auto ">
          <span className="lvl text-end text-xl">#{user.id}</span>
        </div>
      )
      case "sno":
      return (
        <div className="capitalize w-[40%] mx-auto ">
          <span className="lvl text-end text-xl">#{user.id}</span>
        </div>
      )
      case "name":
        return (
          <div className="capitalize w-[40%] mx-auto">
          <User
            avatarProps={{radius: "md", src: user.avatar}}
            name={cellValue as string}
          >
          </User>
        </div>
        );
      case "stars":
        return (
          <StarDisplay
            cellValue={cellValue as number}
          />
        );
      case "xps":
        return (
          <div className="capitalize flex gap-2 items-center justify-center">
            <div><span className="user-leaderboard-text">Xps: </span><span>{cellValue as number}</span></div>
            <div><span className="lvl"> - LVL: {user.level}</span></div>
          </div>
        )
      case "fampoints":
        return (
          <div className="capitalize flex justify-center items-center gap-1">
            <span className="user-leaderboard-text">Fampoints: </span><span className="flex justify-center items-center">{cellValue as number}</span>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <i className="bi bi-eye text-xl"></i>
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <i className="bi bi-pencil-square text-xl"></i>
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <i className="bi bi-trash-fill text-xl"></i>
              </span>
            </Tooltip>
          </div>
        );
      default:
       return String(cellValue);
    }
  }, []);

    return (
        <Table hideHeader aria-label="Example table with custom cells"
        style={{boxShadow: 'inset 0px -40px 63px 5px rgb(24 24 24 / 62%)'}} 
          
        bottomContent={
          <div className="flex w-full justify-center ">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
              
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px] bg-black text-white",
        }}
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.uid} >
                {column.name}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={items}>
            {(item: T) => (
              <TableRow key={item.id} className="cursor-pointer" >
                {(columnKey) => <TableCell>{renderCell(item, columnKey as keyof T)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
    )
}

export default UserTable