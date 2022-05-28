def calculate_mode(array_of_elements):
    """Calculate the mode from a given array of elements

    Args:
        array_of_elements (array): An array of elements

    Returns:
        array: An array of elements that are the mode from the given array
    """

    # This is a sorted list of each unique element containing it's key/value
    list_of_elements = sorted([[x, array_of_elements.count(x)] for x in set(array_of_elements)])

    # List of modes to return
    list_of_modes = []

    # Grab the highest value
        # (sorted numbers don't sort correctly so it'll grab the lowest 'key' value 
        # (where key is the given element from the array))
    mode_val = list_of_elements[0][1]

    # Loop through the list, reversed to catch all cases
    for nested_data in reversed(list_of_elements):
        # is the current data value higher or equal to the mode val?
        if nested_data[1] >= mode_val:
            # Add to the list of modes, and set the mode_val to our val since we are the highest
            list_of_modes.append(nested_data[0])
            mode_val = nested_data[1]
    # Return the list of modes
    return print(list_of_modes)

calculate_mode(["a", "b", "c", "b", "b", "a", "a"])
calculate_mode([1,3,3])