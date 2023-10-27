function countRedBeads(n) {
    // Check if there are at least two beads to form a pair
    if (n < 2) {
      return 0;
    } else {
      // Each pair of beads has one red bead on each end
      // So, for n pairs, you need 2 * n red beads
      return (n - 1) * 2;
    }
  }