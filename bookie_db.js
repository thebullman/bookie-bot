import massive from 'massive'
const db = massive.connectSync({db: 'bookie-bot'})

export default const BookieDB = {
	user: {
		// Returns one user by id
		find(id) => {
			db.users.find(id)
		}
		// Returns all users in DB
		all() => {}
		// Returns all admin users
		admin() => {}
		// Inserts a new user into the DB
		create(user_params) => {}
		// Sets user's cash money levels
		set_cash(slack_handle, amount) => {}
	},
	horse: {
		// Returns one horse by id
		find(id) => {}
		// Returns all horses in DB
		all() => {}
	},
	race: {
		// returns bets for this race
		bets(race_id) => {}
		// Returns a list of horses and their betting odds
		odds(race_id) => {}

		create(race_name, all_the_pretty_horses) => {}
	},
	bet: {
		// Adds a new bet!
		create(bet_params) => {}
		// Returns all bets a user has made
		for_user(user_id) => {}
		// Clears bets for a user
		clear_for_user(user_id) => {}
		// Clears bets for a race
		clear_for_race(race_id) => {}
	}
}