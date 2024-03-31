package hash_tables

func First_recurring_character(input []int) int {

	for i := 0; i < len(input); i++ {
		for j := i + 1; j < len(input); j++ {
			if input[i] == input[j] {

				return input[i]
			}
		}

	}

	return 0

}

func First_recurring_character_optmized(input []int) int {

	seen := make(map[int]bool)

	for _, val := range input {
		if seen[val] {
			return val
		}
		seen[val] = true
	}

	return 0
}
