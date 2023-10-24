import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
} from "@mui/material";
import { getUsers, deleteUser } from "../../services/userService";
import { useNavigate } from "react-router-dom";

const DataTableUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Error al cargar usuarios:", error));
  }, []);
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error(`Error al eliminar el usuario con ID ${id}:`, error);
    }
  };
  return (
    <Box
      sx={{
        paddingTop: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TableContainer
        component={Paper}
        sx={{
          width: "60%",
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>FullName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.fullname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>
                  <Button
                    sx={{
                      color: "white",
                      backgroundColor: "black",
                      "&:hover": {
                        color: "black",
                        backgroundColor: "yellow",
                      },
                    }}
                    onClick={() => navigate(`/update/${user.id}`)}
                  >
                    Update
                  </Button>
                  <Button
                    sx={{
                      margin: "5px",
                      color: "white",
                      backgroundColor: "black",
                      "&:hover": {
                        color: "black",
                        backgroundColor: "red",
                      },
                    }}
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DataTableUsers;
