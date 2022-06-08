import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import UserContext from "../src/context/user/user.context";
import { useForm } from "react-hook-form";
import { Button, TextField, Typography,  Card } from "@mui/material";
import { useContext, useEffect, useMemo, useState } from "react";
import Table from "../src/components/Table/table";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import Modal from "../src/components/Modal/modal"

export default function Home() {
  const { user, status, readUser, updateUser, deleteUser, addUser } =
    useContext(UserContext);
  const [openModal, setOpenModal] = useState(false);
  const [userSelected, setUserSelected] = useState({
    name: "",
    lastName: "",
    gender: "",
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleClose = () => setOpenModal(false);

  const generatorId = () => {
    return Math.random().toString("36").split(".")[1].substring(0, 8);
  };

  const adduser = (data) => {
    let id = generatorId();
    const newUser = {
      id,
      ...data,
    };

    addUser(newUser);
  };

  const selectUserUpdate = (id) => {
    console.log("id", id);
    const result = user.find((ele) => ele.id === id);
    setUserSelected(result);
    console.log("finaly", userSelected);
    setOpenModal(!openModal);
  };
  const selectUserdelete = (id) => {
    deleteUser(id);
    console.log(id);
  };
   const validationUpdate =(data)=>{
     console.log(data)
    const result = Object.entries(data).some(([key,value])=>{
      return userSelected[key] !== value 
    })
  if(result){
   updateUser(userSelected.id, data)
   setOpenModal(!openModal)
  }
  else{alert("Make any changes" )}
  
   }

  const data = useMemo(() => user, [user]);

  const columns = useMemo(() => [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Last name",
      accessor: "lastName",
    },
    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Action",
      Cell: (props) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <DeleteOutlineIcon
                onClick={() => selectUserdelete(props.row.original.id)}
                style={{ cursor: "pointer", padding: 3 }}
              />
            </div>
            <div>
              <BorderColorTwoToneIcon
                onClick={() => selectUserUpdate(props.row.original.id)}
                style={{ cursor: "pointer", padding: 3 }}
              />
            </div>
          </div>
        );
      },
    },
  ]);

  useEffect(() => {
    readUser();
    console.log("userState", status, user);
    
  }, [!status]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        gap: "20px",
        background: "#f0f8ff",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          margin: "20px",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "20px",
            alignItems: "center",

            height: "80vh",
          }}
          onSubmit={handleSubmit(adduser)}
        >
          <Typography>Add Users</Typography>
          <TextField
            variant="outlined"
            label="Name"
            type="text"
            {...register("name", { required: true })}
          />
          <TextField
            variant="outlined"
            label="Last name"
            error={errors.lastName ? true : false}
            type="text"
            {...register("lastName", { required: true })}
          />
          <TextField
            variant="outlined"
            label="Gender"
            type="text"
            {...register("gender", { required: true })}
          />

          <Button type="submit" variant="contained">
            Save
          </Button>
        </form>
      </Card>

      <Card
        style={{
          width: "60%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          height: "80vh",
        }}
      >
        <Typography>Users list</Typography>
        <div style={{ padding: "10px", width: "80%" }}>
          <Table columns={columns} data={data} />
        </div>
      </Card>
      {/* </div> */}

<Modal open={openModal}
close={handleClose}
defaulName={userSelected.name} 
defaultLastName={userSelected.lastName}
defaultGender={userSelected.gender}
validation={validationUpdate}
/>
      {/* <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: "50vh",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <form
            style={{
              width: "80%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              margin: "20px",
              alignItems: "center",
              height: "80vh",
            }}
            onSubmit={handleSubmit(validationUpdate)}
          >
            <Typography>{userSelected.name}</Typography>
            <Typography>Update User</Typography>
            <TextField
              variant="outlined"
              defaultValue={userSelected.name}
              type="text"
              {...register("name", { required: true })}
            />
            <TextField
              variant="outlined"
              defaultValue={userSelected.lastName}
              error={errors.lastName ? true : false}
              type="text"
              {...register("lastName", { required: true })}
            />
            <TextField
              variant="outlined"
              defaultValue={userSelected.gender}
              type="text"
              {...register("gender", { required: true })}
            />
            <div
              style={{
                flexDirection: "row",
                gap: "20px",
                justifyContent: "space-evenly",
                display: "flex",
              }}
            >
              <Button type="submit" variant="contained">
                Save
              </Button>
              <Button variant="contained" onClick={() => handleClose()}>
                Cancel
              </Button>
            </div>
          </form>
        </Box>
      </Modal> */}
    </div>
  );
}
