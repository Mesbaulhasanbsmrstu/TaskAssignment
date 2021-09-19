using System.ComponentModel.DataAnnotations;
namespace API.Dto
{
    public class TADADto
    {
        [Required]
        public string date { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string travelCost { get; set; }
        [Required]
        public string lunchCost { get; set; }
        [Required]
        public string instrumentsCost { get; set; }
        [Required]
        public int paid { get; set; }
    }
}