import { BandDatabase } from "../data/BandDatabase";
import { ShowDatabase } from "../data/ShowDatabase";
import { InvalidInputError } from "../error/InvalidInputError";
import { NotFoundError } from "../error/NotFoundError";
import { UnauthorizedError } from "../error/UnauthorizedError";
import { Show, ShowInputDTO, Weekday } from "../model/Show";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class ShowBusiness {

    constructor(
        private showDatabase: ShowDatabase,
        private bandDatabase: BandDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    async createShow(input: ShowInputDTO, token: string) {

        const tokenData = this.authenticator.getData(token)

        if (tokenData.role !== UserRole.ADMIN) {
            throw new UnauthorizedError("Only admins can access this feature")
        }

        if (!input.bandId || !input.startTime || !input.endTime || !input.weekDay) {
            throw new InvalidInputError("Invalid input to create show")
        }

        if (input.startTime < 8 || input.endTime > 23 || input.startTime >= input.endTime) {
            throw new InvalidInputError("Invalid time to create show")
        }

        if (!Number.isInteger(input.startTime) || !Number.isInteger(input.endTime)) {
            throw new InvalidInputError("Times should be integer to create show")
        }

        const band = await this.bandDatabase.getBandDetails(input.bandId)

        if (!band) {
            throw new NotFoundError("Band not found")
        }

        const registeredShows = await this.showDatabase.getShowsByTimes(input.weekDay, input.startTime, input.endTime)

        if (registeredShows.length) {
            throw new InvalidInputError("No more shows can be created at this times")
        }

        await this.showDatabase.createShow(
            Show.toShow({
                ...input,
                id: this.idGenerator.generate()
            })
        )
    }

    async getShowsByWeekDay(weekDay: Weekday) {

        if (!weekDay) {
            throw new InvalidInputError("Invalid input to get shows by week day")
        }

        const shows = await this.showDatabase.getShowsByWeekDay(weekDay)

        return { result: shows }
    }
}