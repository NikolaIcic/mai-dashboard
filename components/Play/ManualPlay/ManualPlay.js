import { useState } from 'react'
import styles from './ManualPlay.module.css'
import GameModal from './GameModal/GameModal';

const ManualPlay = ({ selected }) => {
    const predictionNames = ['1', 'X', '2', '2+', '3+', '0-2', 'GG'];
    const predictions = [];
    predictionNames.forEach(name => {
        predictions.push({
            Name: name,
            Quote: 1
        })
    });
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState({ name: 'Team 1 - Team 2', predictions: predictions })
    const [openModal, setOpenModal] = useState(false);
    const [gameIndex, setGameIndex] = useState(-1);
    const [newGame, setNewGame] = useState(true);

    const editGameCallback = (game) => {
        let temp = [...games];
        if (!newGame)
            temp[gameIndex] = game;
        else
            temp.push(game);
        setGames(temp);
    }

    const handleAddNewGame = () => {
        setSelectedGame({ name: 'Team 1 - Team 2', predictions: predictions });
        setGameIndex(-1);
        setNewGame(true);
        setOpenModal(true);
    }

    const handleEditGame = (index) => {
        setSelectedGame(games[index]);
        setGameIndex(index);
        setNewGame(false);
        setOpenModal(true);
    }

    const handleDeleteGame = (index) => {
        let temp = [...games];
        temp.splice(index,1);
        setGames(temp);
    }

    return (
        <div className={styles.container}>
            <h3 className='text-center mt-1'>Create new Ticket</h3>
            <div className='d-flex mt-3'>
                <div className={games.length == 0 ? 'hidden' : 'w-60'}>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Game</th>
                                <th>Teams</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {games.map((game, index) =>
                                <tr key={'game' + index}>
                                    <td>{index + 1}</td>
                                    <td>{game.name}</td>
                                    <td><button onClick={()=>handleEditGame(index)} className={styles.editBtn}>Edit</button></td>
                                    <td><button onClick={()=>handleDeleteGame(index)} className={styles.deleteBtn}>Delete</button></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className={games.length == 0 ? 'w-100 text-center' : 'w-40 text-center'}>
                    <h4 className='mb-2 text-center'>Add games manualy by filling in all the data</h4>
                    <button onClick={handleAddNewGame}>Add Game</button>
                </div>
            </div>
            <GameModal game={selectedGame} openModal={openModal} closeModal={() => setOpenModal(false)} callBack={editGameCallback} />
        </div>
    )
}

export default ManualPlay