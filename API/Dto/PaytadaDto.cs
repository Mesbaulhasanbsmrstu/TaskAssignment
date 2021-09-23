using System.ComponentModel.DataAnnotations;
namespace API.Dto
{
    public class PaytadaDto
    {
        [Required]
        public int id { get; set; } 
        [Required]
        public string date { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string travelCost { get; set; }
        [Required]
        public string lunchCost { get; set; }
        [Required]
        public string instrumentsCost { get; set; }
         [Required]
        public string totalCost { get; set; }
        [Required]
        public int paid { get; set; }
    }
}