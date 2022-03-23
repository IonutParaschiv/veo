import {
  Paper,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";
import { MatchType } from "../types";
import { PlayerModal } from "./PlayerModal";

type PropsType = {
  recordings: MatchType[];
};
export const RecordingsTable = ({ recordings }: PropsType) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [matchSlug, setMatchSlug] = useState<string>("");

  const rows = recordings.map((recording: MatchType) => {
    return {
      image: recording.thumbnail,
      name: recording.title,
      date: recording.created,
      url: recording.url,
      slug: recording.slug,
      duration: recording.duration,
      views: recording.view_count
    };
  });

  const Thumbnail = styled("img")({
    maxWidth: 100,
    cursor: "pointer",
  });

  const openModal = async (matchSlug: string) => {
    setMatchSlug(matchSlug);
    setModalOpen(true);
  };
  const closeModal = () => {
    setMatchSlug("");
    setModalOpen(false);
  };
  const parseDate = (date: string) => {
    const dateObject = new Date(date);
    return `${dateObject.getDate()}/${
      dateObject.getMonth() + 1
    }/${dateObject.getFullYear()}`;
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="recordings table">
          <TableHead>
            <TableRow>
              <TableCell>Recording</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Created</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Views</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  onClick={() => {
                    openModal(row.slug);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <Thumbnail src={row.image} alt={row.name} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{parseDate(row.date)}</TableCell>
                <TableCell>{Math.floor(row.duration/60)}m</TableCell>
                <TableCell>{row.views}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PlayerModal
        isOpen={modalOpen}
        match={matchSlug}
        handleClose={closeModal}
      />
    </>
  );
};
